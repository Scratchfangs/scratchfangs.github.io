(function (Scratch) {
'use strict';
console.log("Eval for Valuminous");

class Eval {
  getInfo() {
    return {
      id: 'Eval',
      name: 'Evaluate',
      color1: '#ff6d00',
      blocks: [
        {
          opcode: 'eval',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Eval [JAVASCRIPT]',
          arguments: {
            SPRITE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Sprite1',
            },
          },
        },
      ],
    };
  }

  eval({ SPRITE }) {
        try {
            // eslint-disable-next-line no-eval
            eval(String(args.JAVASCRIPT));
        } catch (e) {
            alert(e);
            console.error(e);
        }
  }
}

Scratch.extensions.register(new DeleteSprite());
// @ts-ignore
})(Scratch);
