#!/bin/bash
export DEPLOYPATH=/home/$USER/public_html/        
export BASEPATH=""
export DOMAINPATH="https://privacyrating.info"
yarn install
yarn build
rm -rf $DEPLOYPATH/*
cp -R dist/. $DEPLOYPATH