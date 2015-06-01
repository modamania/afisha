module.exports = function(app) {
  var express = require('express');
  var eventsRouter = express.Router();

  var EVENTS = [
    {
      id: 1,
      title: 'Back Street Boys',
      cover: 'http://lorempixel.com/800/800/people',
      date: '12 июня 2015',
      place: 'Фетисов Арена',
      price: 'от 3000 до 6000',
      description: 'Fixie tote bag ethnic keytar. Neutra vinyl American Apparel kale chips tofu art party, cardigan raw denim quinoa. Cray paleo tattooed, Truffaut skateboard street art PBR jean shorts Shoreditch farm-to-table Austin lo-fi Odd Future occupy. Chia semiotics skateboard, Schlitz messenger bag master cleanse High Life occupy vegan polaroid tote bag leggings. Single-origin coffee mumblecore deep v salvia mlkshk. Organic photo booth cray tofu, vegan fixie bitters sriracha. Blog Austin Wes Anderson, deep v pour-over trust fund vinyl mlkshk +1.',
      isHero: false
    },
    {
      id: 2,
      title: 'Уматурман',
      cover: 'http://lorempixel.com/800/800/people',
      date: '26 июня 2015',
      place: 'Фетисов Арена',
      price: 'от 3000 до 6000',
      description: 'Fixie tote bag ethnic keytar. Neutra vinyl American Apparel kale chips tofu art party, cardigan raw denim quinoa. Cray paleo tattooed, Truffaut skateboard street art PBR jean shorts Shoreditch farm-to-table Austin lo-fi Odd Future occupy. Chia semiotics skateboard, Schlitz messenger bag master cleanse High Life occupy vegan polaroid tote bag leggings. Single-origin coffee mumblecore deep v salvia mlkshk. Organic photo booth cray tofu, vegan fixie bitters sriracha. Blog Austin Wes Anderson, deep v pour-over trust fund vinyl mlkshk +1.',
      isHero: false
    },
    {
      id: 3,
      title: 'Группа Ленинград',
      cover: 'http://lorempixel.com/800/800/people',
      date: '16 июня 2015',
      place: 'Фетисов Арена',
      price: 'от 3000 до 6000',
      description: 'Широкую известность группе принесла ротация некоторых песен на «Нашем радио», фильм «ДМБ-2» (где около десятка песен «Ленинграда» были использованы в качестве саундтреков). После этого у группы появилась широкая группа поклонников, которая с каждым годом только увеличивается. Летом 2000 года группа записала свой третий альбом «Дачники», ставший едва ли не самым культовым в биографии «Ленинграда». Песни с альбома были быстро разобраны на цитаты, а концертная программа «Дачники» вызвала настоящий восторг у большинства ценителей группы. Во время концертов того периода в группе плавно начался раскол — из-за безудержного пьянства и агрессивного поведения Романа Фокина духовая секция «Ленинграда» стала отдаляться от «основного костяка» коллектива — Шнурова, Антоненко, Попова и Калинина.',
      isHero: false
    },
    {
      id: 4,
      title: 'Группа Ленинград',
      cover: 'http://lorempixel.com/800/800/people',
      date: '16 июня 2015',
      place: 'Фетисов Арена',
      price: 'от 3000 до 6000',
      description: 'Fixie tote bag ethnic keytar. Neutra vinyl American Apparel kale chips tofu art party, cardigan raw denim quinoa. Cray paleo tattooed, Truffaut skateboard street art PBR jean shorts Shoreditch farm-to-table Austin lo-fi Odd Future occupy. Chia semiotics skateboard, Schlitz messenger bag master cleanse High Life occupy vegan polaroid tote bag leggings. Single-origin coffee mumblecore deep v salvia mlkshk. Organic photo booth cray tofu, vegan fixie bitters sriracha. Blog Austin Wes Anderson, deep v pour-over trust fund vinyl mlkshk +1.',
      isHero: false
    },
    {
      id: 5,
      title: 'Группа Ленинград',
      cover: 'http://lorempixel.com/800/800/people',
      date: '16 июня 2015',
      place: 'Фетисов Арена',
      price: 'от 3000 до 6000',
      description: 'Fixie tote bag ethnic keytar. Neutra vinyl American Apparel kale chips tofu art party, cardigan raw denim quinoa. Cray paleo tattooed, Truffaut skateboard street art PBR jean shorts Shoreditch farm-to-table Austin lo-fi Odd Future occupy. Chia semiotics skateboard, Schlitz messenger bag master cleanse High Life occupy vegan polaroid tote bag leggings. Single-origin coffee mumblecore deep v salvia mlkshk. Organic photo booth cray tofu, vegan fixie bitters sriracha. Blog Austin Wes Anderson, deep v pour-over trust fund vinyl mlkshk +1.',
      isHero: false
    }
  ]
  
  eventsRouter.get('/', function(req, res) {
    res.send({
      'events': EVENTS
    });
  });

  eventsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  eventsRouter.get('/:id', function(req, res) {
    // res.send({
    //   'events': {
    //     id: req.params.id
    //   }
    // });
    res.send({
      'events': EVENTS
    });
  });

  eventsRouter.put('/:id', function(req, res) {
    res.send({
      'events': {
        id: req.params.id
      }
    });
  });

  eventsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/events', eventsRouter);
};
