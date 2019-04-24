
const tf = require('@tensorflow/tfjs');
const iris = require('./iris.json');


// convert/setup our data
const trainingData = tf.tensor2d(iris.map(item => [
    item.sepal_length, item.sepal_width, item.petal_length, item.petal_width,
]))
const outputData = tf.tensor2d(iris.map(item => [
    item.species === "setosa" ? 1 : 0,
    item.species === "virginica" ? 1 : 0,
    item.species === "versicolor" ? 1 : 0,
]))

//you put data in following  from UI
const testingData = tf.tensor2d([
    5.9, 3, 5.1, 1.8,
], [1, 4])


// build neural network
const model = tf.sequential()

model.add(tf.layers.dense({
    inputShape: [4],
    activation: "sigmoid",
    units: 5,
}))
model.add(tf.layers.dense({
    inputShape: [5],
    activation: "sigmoid",
    units: 3,
}))
model.add(tf.layers.dense({
    activation: "sigmoid",
    units: 3,
}))
model.compile({
    loss: "meanSquaredError",
    optimizer: tf.train.adam(.06),
})
// train/fit our network
model.fit(trainingData, outputData, { epochs: 100 })
    .then(() => {
        // console.log(history)
        const ans = model.predict(testingData); //.print()
        ans.data().then((val) => {
            console.log('possibility of setosa is ', val[0]);
            console.log('possibility of virginica is ', val[1]);
            console.log('possibility of versicolor is ', val[2]);

            value1 = val[0];
            value2 = val[1];
            value3 = val[2];
            module.exports = { "val1": value1, "val2": value2, "val3": value3 }

        })

    })



// test network