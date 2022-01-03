#!/bin/zsh
npm run build
rsync -avuz --delete /Users/chunfu/IdeaProjects/spatial-visual/build rbase@10.10.30.30:/home/user/data2/rbase/spatial-visual/
