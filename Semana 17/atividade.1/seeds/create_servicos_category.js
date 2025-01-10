exports.seed = function (knex) {
  return knex('categories')
    .then(function () {
      return knex('categories').insert([
        {
          name: 'Serviços'
        }
      ]);
    });
};
