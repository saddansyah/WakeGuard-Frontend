import * as tf from "@tensorflow/tfjs";

const useModel = ({ webcamRef, setResult }) => {

    const runModel = async (setInitializing) => {
        setInitializing(true)
        const model = await tf.loadGraphModel('https://wakeguard.blob.core.windows.net/wakeguard/models/model.json');
        const INTERVAL = 200;

        if (model) {
            console.log('Model is succesfully loaded');
            setInitializing(false)
            setInterval(() => {
                // detect(model);
            }, INTERVAL);
        }

    }

    const detect = async (net) => {
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            // Get video width and height
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            // Set video width and height
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            const img = tf.browser.fromPixels(video)
            const resized = tf.image.resizeBilinear(img, [640, 480])
            const casted = resized.cast('int32')
            const expanded = casted.expandDims(0)
            const obj = await net.executeAsync(expanded)

            const classes = await obj[4].array()

            // Set result
            setResult(classes[0].reduce((acc, curr) => { return acc + curr }, 0) > 161 ? 'Drowsy' : 'Awake');

            // Dispose variables to improve perfomance
            tf.dispose(img)
            tf.dispose(resized)
            tf.dispose(casted)
            tf.dispose(expanded)
            tf.dispose(obj)
        }
    }


    return { runModel }

}

export default useModel;