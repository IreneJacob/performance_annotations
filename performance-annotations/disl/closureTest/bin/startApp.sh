#!/bin/bash

INSTR_PATH=output
DISL_LIB_PATH=lib

APP_JAR=lib/closure.jar
APP_CP=$APP_JAR

INSTR_JAR=$INSTR_PATH/closureInst.jar

./bin/startProfiler.sh &

sleep 1

echo starting program

java -cp $APP_CP -agentpath:lib/libdislagent.jnilib  -Xbootclasspath/a:lib/disl-bypass.jar:$INSTR_JAR -noverify com.google.javascript.jscomp.CommandLineRunner --js js/* --js_output_file output/compressed_file.js
