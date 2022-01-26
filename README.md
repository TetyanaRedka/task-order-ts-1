# task-order-ts-1

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### About task

Задача
Разработать простое SPA CRUD приложение "Список заказов"
Описание
Получить данные из BackEnd и вывести данные в виде карточек. Описание запросов предоставлено далее.
• Данные представляют собой список заказов. Приблизительный макет представлен далее. • На экране должна быть кнопка добавления заказа.
– Новую запись отправляем на BackEnd, если успешно - добавляем запись на FrontEnd • На каждой карточке заказа должна быть кнопка удаления заказа.
– Удаление должно быть с подтверждением удаления пользователем. – Если пользователь подтвердил - отправляется запрос на сервер.
– Если запрос прошел успешно - удаляем запись на FrontEnd
• На каждой карточке должна быть кнопка редактирования.
По клику на кнопку редактирования:
• в карточке на месте данных появляются input'ы
• на месте кнопки редактирования появляются кнопки "Сохранить" и "Отмена"
• по клику на кнопку "Сохранить" - отправляется запрос на BackEnd, если успешно - input'ы заменяются данными заказа.
• по клику на кнопку "Отмена" - input'ы заменяются данными, которые были до редактирования.
