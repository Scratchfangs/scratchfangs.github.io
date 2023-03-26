(function (Scratch) {
  'use strict';
  console.log("DeleteSprite v1.0");

  // Wait for the VM to be initialized
  Scratch.extensions.register(new (class {
    getInfo() {
      return {
        id: 'DeleteSprite',
        name: 'Delete Sprite',
        color1: '#ff6d00',
        blocks: [
          {
            opcode: 'deleteSprite',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Delete sprite [SPRITE]',
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
  })());

  // Define the extension class
  class DeleteSprite {
    getInfo() {
      return {
        id: 'DeleteSprite',
        name: 'Delete Sprite',
        color1: '#ff6d00',
        blocks: [
          {
            opcode: 'deleteSprite',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Delete sprite [SPRITE]',
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

    deleteSprite({ SPRITE }) {
      Scratch.vm.deleteSprite(SPRITE);
    }
  }

  Scratch.extensions.register(new DeleteSprite());
})(Scratch);
