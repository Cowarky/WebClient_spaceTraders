class Notification {
    constructor(title, description){
        this.title = title
        this.description = description  
        this.fire()
    }
    fire(){
        console.log(this.title+this.description)
    }
}

module.exports = Notification