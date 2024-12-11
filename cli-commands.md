# Полезные консольные команды и утилиты

- `echo [что_вывести]` - вывод строки в STDOUT (например, `echo $DT` выведет в консоль значение переменной $DT)
- `echo [что_вывести] >&2` — вывод строки в STDERR
- `pwd` — вывести путь к текущей директории
- `whoami` — вывести логин текущего пользователя

## Работа с файловой системой

- `cd [путь]` — перейти в заданную папку
- `cd ..` — перейти на уровень выше
- `cd ../..` — перейти на 2 уровня выше
- `cd` — перейти в домашний каталог
- `cd -` — перейти в предыдущий каталог (полезно, когда нужно уйти в другой каталог, а потом вернуться обратно)
- `ls` — показать файлы и директории в текущей директории
- `ls -a` — показать файлы и директории, включая скрытые
- `ls -1` — вывод файлов и папок, каждое название с новой строки
- `mkdir [имя]` — создать директорию в текущей
- `rm [путь]` — удалить файл
- `rm -rf [путь]` — удалить папку (`-r` — рекурсивно удалить всё содержимое, `-f` — не запрашивать подтверждение удаления для каждого файла/папки)
- `mv [имя1_или_путь1] [имя2_или_путь2]` — переместить\переименовать
- `cp [что_копировать] [куда_копировать]` — скопировать файл
- `find [где_искать] -name [имя_что_искать]` — поиск файлов по имени в заданной папке (в имени можно использовать `*`)

## Работа с текстом

- `cat [путь_к_файлу]` — вывод содержимого файла
- `sort` — сортирует строки, поданные на вход
- `sort -r` — сортировка в обратном порядке
- `sort -n` — воспринимать сортируемые строки как числа
- `sort -u` — удалить неуникальные строки
- `wc -l` — число строк в файле
- `wc -w` — число слов в файле
- `wc -c` — число символов в файле
- `tail -n 20 [путь_к_файлу]` или  `tail -20 [путь_к_файлу]` — вывод последних 20 строк файла (если количество не задано, будет выведено 10 строк)
- `awk '{ print $3 }'` — разбить строку на фрагменты по разделителю `TAB` или `пробел` и вывести третий фрагмент
- `awk -F / '{ print $1 }'` — разбить строку на фрагменты по заданному разделителю (`/`)

## Grep

Утилита grep ищет в файлах участки текста, соответствующие шаблону pattern, где pattern может быть как обычной строкой, так и регулярным выражением.
- `grep [pattern] [путь к файлу]` — поиск в заданном файле
- `grep [pattern] ` — поиск в тексте, поданном на вход (например в результате выполнения предыдущей команды в цепочке) 

Полезные ключи:
  - `-R` — поиск в папке и во всех вложенных папках
  - `-v` — ищет строки, **не** соответствующие шаблону  
  - `-i` — поиск без учета регистра символов
  - `-l` — вместо найденных строк вывести пути к файлам, где были найдены совпадения
  - `-o` — выводить только часть строки соответствующую шаблону, а не всю строку с подсвеченной частью
  - `-h` — не выводить имя файла перед найденной строкой
  - `-C <число>` — вывести N соседних строк для каждой найденной строки

Вот хорошая [статья про grep](https://habrahabr.ru/post/229501/) с примерами.

## Процессы

- `xargs [команда]` — запуск указанной команды с передачей ей аргументов, поданных на вход (см. далее пример про docker)
- `xargs -L 2 [команда]` — запуск указанной команды несколько раз, каждый раз ей будут переданы очередные два аргумента, поданные на вход команде xargs (вмсето 2 можно указать другое число)
- `xargs -P 10` — запустить выполнение в указанное число (в примере 10) потоков. может значительно ускорить процесс :)
- `ps aux` — вывести список запущенных процессов всех пользователей
- `kill [id_процесса]` — завершить процесс (id можно узнать предыдущей командой)
- `nohup [что_запускать]&` — запустить команду, чтобы она продолжала выполняться в фоновом режиме после выхода пользователя из системы (внимание, в конце символ `&`)

## Сеть

- `curl [url]` - скачивание файла с заданного адреса и вывод на экран
- `curl -o [название_файла] [url]` - скачивание файла с заданного адреса и сохранение в файл
- `curl -L [url]` - если при получении страницы вернулся редирект (код 301 или 302), то скачать файл еще раз с нового адреса
- `curl -I [url]` - получить только http-заголовки для заданного адреса
- `curl -H [заголовок: значение] [url]` - передача своего http-заголовка
- `scp [путь] [пользователь]@[сервер]:[путь_на_удаленном_сервере]` - скопировать файл со своего компьютера на удаленный сервер
- `scp [пользователь]@[сервер]:[путь_на_удаленном_сервере] [путь]` - скопировать файл с удаленного сервера на свой компьютер

## Комплексный пример

Удаление docker-образов, содержащих в названии `"<none>"`

```
docker images | grep "<none>" | awk '{print $3}' | xargs -L 1 docker rmi 
```

В этом примере:
- команда `docker images` выведет все docker образы;
- этот список строк будет подан на вход команде `grep "<none>"`, которая отфильтрует строки, содержащие подстроку `"<none>"`;
- отфильтрованный список строк будет подан на вход команде `awk '{print $3}'`, которая разобьет каждую строку на фрагменты по разделителю `TAB` и выведет третий фразмент (хэш-сумму образа);
- хэш-суммы образов будут поданы на вход команде `xargs -n1 docker rmi`, которая для каждого значения выполнит команду `docker rmi` (получится набор команд `docker rmi <hash-1>`, `docker rmi <hash-2>`, ... `docker rmi <hash-N>`)