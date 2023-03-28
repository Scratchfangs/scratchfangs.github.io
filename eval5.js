(function (Scratch) {
'use strict';
console.log("Eval for Valuminous");

class evaluate {
  getInfo() {
    return {
      id: 'evaluate',
      name: 'evaluate',
      color1: '#ff6d00',
      blocks: [
        {
        opcode: 'evaluate',
        text: 'eval [JAVASCRIPT]',
        blockType: Scratch.BlockType.COMMAND,
                    arguments: {
                        JAVASCRIPT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "console.log('Hello!')"
            },
          },
        },
      ],
    };
  }

  evaluate({ JAVASCRIPT }) {
        try {
            // eslint-disable-next-line no-eval
            eval(String(args.JAVASCRIPT));
        } catch (e) {
            alert(e);
            console.error(e);
        }
  }
}

Scratch.extensions.register(new evaluate());
// @ts-ignore
})(Scratch);
