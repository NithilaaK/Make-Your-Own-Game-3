class Features {
    constructor() {
        this.feedButton = createButton("🍕");
        this.playButton = createButton("🏀");
        this.sleepButton = createButton("🛌");
    }

    hide() {
        this.playButton.hide();
        this.feedButton.hide();
        this.sleepButton.hide();
    }

    display() {
        this.playButton.show();
        this.feedButton.show();
        this.sleepButton.show();

        this.playButton.position(29, 452);
        this.feedButton.position(94, 452);
        this.sleepButton.position(161, 452);

        this.playButton.size(50, 50);
        this.feedButton.size(50, 50);  
        this.sleepButton.size(50, 50); 

        this.playButton.mousePressed(() => {
            gameState = 2;
        });

        this.feedButton.mousePressed(() => {
            gameState = 3;
        });

        this.sleepButton.mousePressed(() => {
            gameState = 4;
        });
    }
}