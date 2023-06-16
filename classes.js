class PrepTracker {
    constructor() {
        this.topics = []
    }

    addTopic(topic) {
        this.topics.push(topic)
    }

    removeTopic(topic) {
        this.topics = this.topics.filter(function(elem) {
            return elem != topic;
        });
    }

    getAll() {
        return this.topics;
    }
}

let prepTracker = new PrepTracker();
prepTracker.addTopic("java");
prepTracker.addTopic("discrete mathematics");
prepTracker.addTopic("data structures");
prepTracker.addTopic("algorithms");

console.log(prepTracker.getAll());

prepTracker.removeTopic("discrete mathematics");
console.log(prepTracker.getAll());
