#!/bin/bash -x

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR
node compare_both.js
node test.js
node test_sync-1.js
node test_sync-2.js
node test_sync-xtl.js
node test_sync.js
node test_yespower.js
