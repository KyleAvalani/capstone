def on_chat():
    mobs.kill(mobs.entities_by_type(SEA_TURTLE))
    mobs.kill(mobs.entities_by_type(PUFFERFISH))
    mobs.kill(mobs.entities_by_type(SALMON))
    mobs.kill(mobs.entities_by_type(TROPICAL_FISH))
    mobs.kill(mobs.entities_by_type(COD))
    mobs.kill(mobs.entities_by_type(DOLPHIN))
player.on_chat("killfishies", on_chat)
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
