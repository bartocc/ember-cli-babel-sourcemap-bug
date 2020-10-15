import Application from 'ember-cli-babel-sourcemap-bug/app';
import config from 'ember-cli-babel-sourcemap-bug/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
