var FlickrAPI = require('./FlickrAPI');
var mixinListeners = require('./mixinListeners');
var createFavourites = require('./createFavourites');

module.exports = function() {

  var itemsById = {};
  var model = { items: [] };
  
  mixinListeners(model, ['loading', 'update', 'favourite', 'unfavourite', 'debug']);
  
  var favourites = createFavourites();
  
  model.notify('debug', 'Found ' + favourites.count() + ' stored favourite(s).');
  
  function createItem(item) {
    
    item.id = item.link;
    item.favourited = favourites.contains(item.id);
    return item;
  }
  
  function setTag(tag) {
    
    itemsById = [];
    model.items = [];

    model.notify('loading', model);
    
    FlickrAPI.photosPublic(tag).then(function(data) {
      var items = data.items.map(createItem);
      model.items = items;
      model.items.forEach(function(item) { itemsById[item.id] = item; });
      model.syncNotify('update', model);
    });
    
    return this;
  }
  
  function favourite(item) {
    item.favourited = true;
    favourites.add(item.id);
    model.notify('favourite', item.id);
  }
  
  function unfavourite(item) {
    item.favourited = false;
    favourites.remove(item.id);
    model.notify('unfavourite', item.id);
  } 
  
  function toggle(itemId) {
    var item = itemsById[itemId];

    if (item.favourited)
      unfavourite(item);
    else
      favourite(item);

    return this;
  }
  
  model.setTag = setTag;
  model.toggle = toggle;
  
  return model;
};