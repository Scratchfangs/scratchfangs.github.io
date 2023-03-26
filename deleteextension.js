(function (Scratch) {
  'use strict';
  console.log("DeleteSprite v1.0");

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
      const vm = window.vm || document.querySelector("#app")._reactRootContainer.current.child.stateNode.store.getState().scratchGui.vm;
      vm.deleteSprite(vm.runtime.getSpriteTargetByName(SPRITE).id);
    }
  }

  Scratch.extensions.register(new DeleteSprite());
  // @ts-ignore
})(Scratch);
