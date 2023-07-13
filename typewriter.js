class Typewriter {
  constructor(sentence) {
    this.sentence = sentence;
    this.delay = 50;
  }

  animate() {
    let delay = 0;
    for (const char of this.sentence) {
      setTimeout(() => {
        process.stdout.write(char);
      }, delay);
      delay += this.delay;
    }

    setTimeout(() => {
      console.log();
    }, delay);
  }
}

const sentence = "hello there from lighthouse labs";
const typewriter = new Typewriter(sentence);
typewriter.animate();