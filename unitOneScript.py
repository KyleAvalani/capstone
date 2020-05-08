def on_chat():
    mobs.kill(mobs.entities_by_type(SEA_TURTLE))
    mobs.kill(mobs.entities_by_type(PUFFERFISH))
    mobs.kill(mobs.entities_by_type(SALMON))
    mobs.kill(mobs.entities_by_type(TROPICAL_FISH))
    mobs.kill(mobs.entities_by_type(COD))
    mobs.kill(mobs.entities_by_type(DOLPHIN))
player.on_chat("killfishies", on_chat)
def on_chat2():
    blocks.clone(world(108, 59, 568),
        world(106, 60, 566),
        world(129, 81, 561),
        CloneMask.REPLACE,
        CloneMode.FORCE)
    blocks.clone(world(108, 59, 568),
        world(106, 60, 566),
        world(113, 81, 561),
        CloneMask.REPLACE,
        CloneMode.FORCE)
    blocks.clone(world(108, 59, 568),
        world(106, 60, 566),
        world(121, 84, 569),
        CloneMask.REPLACE,
        CloneMode.FORCE)
player.on_chat("cover", on_chat2)
def block_placed_black_wool():
    for index in range(5):
        mobs.spawn(PUFFERFISH, world(104, 69, 508))
blocks.on_block_placed(BLACK_WOOL, block_placed_black_wool)
def block_placed_pumpkin():
    for index2 in range(5):
        mobs.spawn(SALMON, world(104, 69, 508))
blocks.on_block_placed(PUMPKIN, block_placed_pumpkin)
def block_placed_flower_pot():
    for index3 in range(5):
        mobs.spawn(TROPICAL_FISH, world(104, 69, 508))
blocks.on_block_placed(FLOWER_POT, block_placed_flower_pot)
def on_chat3():
    mobs.spawn(POLAR_BEAR, world(120, 65, 565))
player.on_chat("bearslave", on_chat3)
blocks.clone(world(467, 63, 544),
    world(467, 63, 544),
    world(464, 64, 543),
    CloneMask.REPLACE,
    CloneMode.FORCE)
gameplay.set_weather(CLEAR)
mobs.kill(mobs.entities_by_type(POLAR_BEAR))
while True:
    loops.pause(500)
    blocks.clone(world(131, 65, 561),
        world(131, 65, 561),
        world(114, 66, 560),
        CloneMask.REPLACE,
        CloneMode.FORCE)
