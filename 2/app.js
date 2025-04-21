const [,, command, ...args] = process.argv;

switch (command) {
  case 'add': {
    const title = args.join(' ');

    if (!title) {
      console.log('add task');
      process.exit(1);
    }
  }

  case 'list': {
    break;
  }

  case 'done': {
    break;
  }

  case 'delete': {

  }

  case 'clear': {

  }
}
