import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { HelloWorld } from '../imports/hello_world';
import HelloWorldToo from '../imports/hello_world_too';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  hello_world() {
    return (new HelloWorld).hello();
  },
  hello_meteor() {
    return (new HelloWorldToo).hello('Meteor');
  }
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
