import Ember from 'ember';
import layout from '../templates/components/responsive-embed';

const YOUTUBE_REGEX = /(https?:\/\/)?(www.)?(youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/watch\?feature=player_embedded&v=)([A-Za-z0-9_-]*)(\&\S+)?(\?\S+)?/;
const VIMEO_REGEX   = /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/;
const INSTAGRAM_REGEX = /(https?:\/\/)?(www.)?instagr(am\.com|\.am)\/p\/([A-Za-z0-9_-]*)/;

const {
    get,
    computed,
    Component,
    String: {
        htmlSafe
    }
} = Ember;

export default Component.extend({
    layout,
    classNames: ['responsive-embed'],
    embedCode: '',
    embed: computed('embedCode', function() {
        let code = get(this, 'embedCode');
        if (YOUTUBE_REGEX.test(code)) {
            return htmlSafe(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${YOUTUBE_REGEX.exec(code)[4]}?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>`);
        } else if (VIMEO_REGEX.test(code)) {
            return htmlSafe(`<iframe src="https://player.vimeo.com/video/${VIMEO_REGEX.exec(code)[3]}?title=0&byline=0&portrait=0" width="640" height="427" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`);
        } else if (INSTAGRAM_REGEX.test(code)) {
            return htmlSafe('instagram');
        } else {
            return 'unsupported';
        }
    }
  )

});
