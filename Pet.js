class Pet {
    constructor(image) {
        this.petName = null;
        this.image = loadImage(image);
    }

    updateName(name){
        this.petName = name;
    }

    display() {
        imageMode(CENTER);
        image(this.image, 175, 284, 300, 300);
    }
}