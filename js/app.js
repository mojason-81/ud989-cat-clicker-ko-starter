'use strict';
let initialCats = [
  {
    name: 'Ralph',
    imgSrc: './img/rr_cat.jpg',
    clickCount: 0,
    imgAttribution: "Jason's Google Foo",
    nickNames:[
      {name: 'Stupid'},
      {name: 'Smelly'},
      {name: 'Boomer'}
    ]
  },
  {
    name: 'Stew',
    imgSrc: './img/cat_farts.jpg',
    clickCount: 0,
    imgAttribution: "Jason's Google Foo",
    nickNames: [
      {name: 'Stinky'}
    ]
  },
  {
    name: 'Boomer',
    imgSrc: './img/cat_butt.jpg',
    clickCount: 0,
    imgAttribution: "Jason's Google Foo",
    nickNames: [
      {name: 'ButtFace'}
    ]
  },
  {
    name: 'CatDog',
    imgSrc: './img/cat_dog.jpg',
    clickCount: 0,
    imgAttribution: "Jason's Google Foo",
    nickNames: [
      {name: 'ATM'}
    ]
  },
  {
    name: 'Fugly',
    imgSrc: './img/ugly_cat.jpg',
    clickCount: 0,
    imgAttribution: "Jason's Google Foo",
    nickNames: [
      {name: 'AAAAHHHH!!!!'}
    ]
  }
];
let Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nickNames = ko.observableArray(data.nickNames);
  this.level = ko.observable();
  this.levelList = ko.observable({
    0: 'Infant',
    10: 'Kitten',
    20: 'Cat',
    30: 'Dead Cat'
  });

  this.setLevel = ko.computed(function() {
    // check to see if levelList.<value of clickCount> exists
    if (this.levelList()[this.clickCount()]) {
      // set level to levelList.<value of clickCount>
      this.level(this.levelList()[this.clickCount()]);
    }
  }, this);
};

let ViewModel = function() {
  let self = this;
  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.changeCat = function(catObj) {
    // Just because I can, log the cat's name to the console
    // by calling .name() on the catObj that was padded in via
    // the click event.
    console.log(catObj.name());
    self.currentCat(catObj);
  };

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
