/**
 * @file index
 * @author anima
 */
import './index.less';
import './index.html';
import { $ } from '../common/base';
import render from './index.atpl';

const page = {
  init() {
    $('#main').html('hi,mobile');
  },
};

page.init();

