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
        opcode: 'evaluate',
        text: 'eval [JAVASCRIPT]',
        blockType: BlockType.COMMAND,
                    arguments: {
                        JAVASCRIPT: {
                            type: ArgumentType.STRING,
                            defaultValue: "console.log('Hello!')"
            },
          },
        },
      ],
    };
  }

  eval({ JAVASCRIPT }) {
        try {
            // eslint-disable-next-line no-eval
            eval(String(args.JAVASCRIPT));
        } catch (e) {
            alert(e);
            console.error(e);
        }
  }
}

Scratch.extensions.register(new Eval());
// @ts-ignore
})(Scratch);
