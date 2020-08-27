let coin = {
    state: 0,
    flip: function() {
            if (Math.random()<.5) {
                this.state = 0
            }
            else {
                this.state = 1
            }
    },

    toString: function() {
        coin.flip()
             if (this.state === 0) {
                 document.body.append ("Heads")
             }
             else {
                document.body.append ("Tails")
             }
    },
    toHTML: function() {
        let head = document.createElement('img');
        let tail = document.createElement('img');
           coin.flip()
           if (this.state === 0) {
               head.src = "./images/coinhead.jpg"
               document.body.append (head)
           }
           else {
               tail.src = "./images/tailscoin.jpg"
               document.body.append (tail)
           }
    }
};

function Display20Flips() {
    for (let index = 0; index < 20; index++) {
        coin.toString()
    }
}
Display20Flips()

function Display20Images() {
    for (let index = 0; index < 20; index++) {
        coin.toHTML()
    }
}
Display20Images()