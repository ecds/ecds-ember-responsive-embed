// tests/unit/components/button-test.js

import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import Ember from 'ember';

var App;

moduleForComponent('responsive-embed', 'ResponsiveEmbed', {
    // unit: true,
    beforeEach() {
        App = startApp();
    },
    afterEach() {
        Ember.run(App, 'destroy');
    }
});

test('is a div', function(assert) {
    assert.equal('DIV', this.$().prop('tagName'));
});

test('builds youtube embed', function(assert) {
    const responsiveCode = this.subject();
    Ember.run(function() {
        responsiveCode.set('embedCode', 'https://www.youtube.com/watch?v=lVehcuJXe6I')
        assert.equal(responsiveCode.get('embed'), '<iframe width="560" height="315" src="https://www.youtube.com/embed/lVehcuJXe6I?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')
    });
});

test('builds vimeo embed', function(assert) {
    const responsiveCode = this.subject();
    Ember.run(function() {
        responsiveCode.set('embedCode', 'https://vimeo.com/1583338')
        assert.equal(responsiveCode.get('embed'), '<iframe src="https://player.vimeo.com/video/1583338?title=0&byline=0&portrait=0" width="640" height="427" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
    });
});
