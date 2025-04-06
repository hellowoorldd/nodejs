nestjs - построен на основе тайпскрипт и вдохновлен архитектурой ангуляр

основан на жесткой слоевой архитектуре, где каждый слой 
отвечает за свою функциональность

- генерация новых проектов
- создание модулей, контроллеров, сервисов одной командой
- генерация шаблонов

### Модули
@Module({
    imports: [],
    // controllers ответственные за запросы, маршруты и 
возврат данных
    controllers: [AppController],
    // service ответственные за бизнес логику
    providers: [AppService],
})

export class AppModule {}


### Контроллеры обрабатывают входящие http запросы и возвращают ответы клиенту

Назначение
- определять маршруты
- принимать и обрабатывать запросы
- возвращать данные
- взаимодействовать с провайдерами

@Controller('users')
export class UsersController {
    @Get()
    findAll() {
        return 'All users';
    }
}

### Сервис - подвид провайдера, это класс, который содержит бизнес логику

- работа с базами, апи
- любые вычисления

@Injectable()
export class UsersService {
    findAll() {
        return [{ id: 1, name: 'John' }];
    }
}

### Middleware (промежуточные обработчики)
Выполняется до того, как запрос попадет в контроллер

- логирование
- валидация токенов
- изменение запроса

function logger(req, res, next) {
    next(); // вызовет след Middleware в цепочке
}

### Exception Filters - это механизм для перехвата и обработки ошибок

throw new HttpException('Forbidden', 403);

### Pipes
Может использоваться для преобразования и валидация входящих данных

примеры встроенных pipes
- ValidationPipe - Проверка DTO c использованием class-validator
- ParseIntPipe, ParseBoolPipe etc.


### Interceptors (Перехватчики)
Позволяют обрабатывать результаты запроса и ответа

- логирование
- обработка ошибок
- изменение ответа

### Декораторы
@Module
@Injectable
@Get() @Post()
@Param() @Query() @Body()
@UseGuards() @UsePipes()

### Custom Decorators, Custom Validation Decorators

### Custom Providers - для тестирования
Позволяют вручную определить, что и как будет внедряться
(provide, useClass, useValue, useFactory, useExisting)

@Module({
    import: [UserService],
    providers: [
        {
            provide: UserService,
            useValue: mockUserService
        }
    ]  
})

### Async Providers
Позволяют создавать провайдеры, которые получают данные
или создаются асинхронно (например после получения данных из бд или конфигурационного файла)

{
    provide: 'ASYNC_VALUE',
    useFactory: async () => {
        const data = await fetchData();
        return data;
    }
}

### Dynamic Modules
Модули, которые могу быть сконфигурированы во время импорта и использовать параметры
@Module({})
export class ConfigModule {
    static register(options: ConfigOptions): DynamicModule {
        return { module: ConfigModule,
        providers: [{ provide: 'OPTIONS', useValue: options }],
    }
}

### Injection Scopes (Области внедрения зависимостей)
SINGLETON - один экземпляр (будет использоваться в 
большинстве случаев)
REQUEST - новый экземпляр на каждый запрос
TRANSIENT - новый экземпляр при каждом внедрении

### Circular Dependency
Ситуация когда два провайдера зависят друг от друга
В NestJS можно решить с помощью forwardRef()

@Module({
    providers: [
        providers: 'A',
        useClass: forwardRef(() => BService),
    ]   
})

### Module Reference
Позволяет вручную получить экземпляр любого провайдеро во время
выполнения

constructor(private moduleRef: ModuleRef) {}

async onModuleInit() {
    const service = await this.moduleRef.get(SomeService, {
        strict: false
    })
}

### Lazy-loading Modules (Ленивая загрузка модулей)
Позволяет загружать модули по требованию, а не при инициализации приложения

Используется для оптимизации запуска приложежния

сonst module = await import('./dynamic.module');

### Execution context (ДОБАВИТЬ ТЕОРИЮ) Позволяет модифицировать поведение мидлваров
ExecutionContext - это абстракция над текущим процессом выполнения
(Request -> Controller -> Method -> Guard -> Interceptor -> Pipe)

### Lifecycle Events
onModuleInit()

onApplicationBootstrap()

onModuleDestroy()

onApplicationShutdown()

beforeApplicationShutdown()

### Платформенная независимость NestJS
- не привязан к какому-то одному серверу или протоколу
- может работать с express, fastify, gRPC
- бизнес логика остается одинаковой, а транспортный 
  уровень может отличаться

### Тестирование
Встроена поддержка Unit and E2E тестов с использованием Jest

Основной инструмент - TestingModule

### Вопросы
Можно навешивать несколько декораторов?
Да

Для чего нужны Guards?
Нужны для защиты аутентификации
