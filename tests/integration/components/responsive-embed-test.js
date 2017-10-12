import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('responsive-embed', 'Integration | Component | responsive embed', {
    integration: true
});

test('it renders unsupported', function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{responsive-embed embedCode='foo'}}`);

    assert.equal(this.$().text().trim(), 'unsupported');

    // Template block usage:
    this.render(hbs`
        {{#responsive-embed}}
            unsupported
        {{/responsive-embed}}
    `);

    assert.equal(this.$().text().trim(), 'unsupported');
});

test('it renders youtube', function(assert) {
    this.render(hbs`{{responsive-embed embedCode='https://www.youtube.com/watch?v=lVehcuJXe6I'}}`);

    assert.equal(this.$().text().trim(), '');
});

test('it renders vimeo', function(assert) {
    this.render(hbs`{{responsive-embed embedCode='https://vimeo.com/1583338'}}`);

    assert.equal(this.$().text().trim(), '');
});
