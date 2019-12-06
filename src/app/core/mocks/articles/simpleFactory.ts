export const simpleFactory = {   
    image: "https://cdn.lynda.com/course/718637/718637-637074670540767570-16x9.jpg",
    content: [
      `<h1>Simple Factory - простая фабрика <span>шаблон проектирования на ES5, ES6, Typescript</span></h1>`,
      `<h2>Цель:</h2>`,
      `<p>Вынести создание объектов со сложной логикой и похожей структурой в отдельную функцию/класс.</p>`,
      `<h2>Когда стоит применять:</h2>`,
      `<p>1. Нужно будет создавать много объектов, относящиеся к одной области.<br>
      2. Создание этих объектов довольно сложное, большое или имеет свою логику.</p>`,
      `<h2>Зачем использовать:</h2>`,
      `<p>1. Чтобы уменьшить основной код и сделать его более читабельным<br>
      2. Чтобы вынести логику создания объектов в одном место - фабрику</p>`,
      `<h2>Преимущества:</h2>`,
      `<p>1. Позволяет изолировать создание объекта от основного кода<br>
      2. Код соответствует принципу SOLID - Single responsibility<br>
      3. Код соответствует принципу ООП - инкапсуляция</p>`,
      `<h2>Недостатки:</h2>`,
      `<p>Большое количество if или switch-case операторов</p>`,
      `<h2>Пример:</h2>`,
      `<i>Пример очень упрощен, для лучшего понимания !!!</i>`,
      `<p>Представьте, что вы создаете портал учета работников компании. Работники могут иметь разные методы и классы, поэтому они создаются отдельными классами/функциями. В примере мы будем создавать следующих работников: developer, designer, manager.</p>`,
      `<p>Предположим, что все классы отличаются друг от друга, поэтому создаются отдельными классами, но у них есть общие свойства (имя, дата рождения), то есть все 3 объекта относятся к определенной области - работники:</p>`,
      `<p>Класс Developer отличается, так как содержит:</p>`,
      `<p>- языки программирования<br>
      - рейтинг (рассчитывается на основе умений - для простоты их количества)</p>`,
      `<p>Класс Designer также отличается, так как содержит:</p>`,
      `<p>- инструменты дизайна<br>
      - рейтинг (рассчитывается на основе умений - для простоты их количества)</p>`,
      `<p>Допустим задача - написать метод Portfolio, который будет выводить информацию о работниках в удобном виде. Для этого необходимо создавать определенный объект работника. Но класса 3, а в реальных проектах еще больше, поэтому хранение логики создания объектов в одном месте - приведет к нечитаемости кода и сложности его поддержки. Для этого и создается фабрика.</p>`,
      `<code>class WorkerFactory {
  create(type, info) {
    switch (type) {
      case 'manager':
        return new Manager(info);
      case 'designer':
        return new Designer(info);
      case 'developer':
        return new Developer(info);
    }
    throw Error('Unknown type of worker');
  }
}</code>`,
      `<p>Согласитесь, глядя на эту функцию понятно, что она делает. При этом она занимается только созданием объектов в зависимости от условия, и ничем больше. Ее задача принять параметры и тип объекта и вернуть готовый объект - все.</p>`,
      `<p>В этом и есть суть фабрики - она, как и обычный завод, производит объекты. При этом классы объектов находятся в другом месте (идеально в других файлах).</p>`,
      `<h2>Реализация:</h2>`,
      `<p>Следующий код представлен в ES6 формате, так как он компактней и его проще понять. Однако в примерах есть код на ES5 и typescript.</p>`,
      `<p>Как уже говорилось раньше у нас есть 3 класса:</p>`,
      `<p>Менеджер</p>`,
      `<code>class Manager {
  constructor(info) {
    this.name = info.name;
    this.birthday = info.birthday;
    this.age = 2019 - info.birthday;
  }
  portfolio() {
    console.log(\`
      Name: \${this.name} (manager)
      Age: \${this.age}
    \`);
  }
}</code>`,
      `<p>Дизайнер</p>`,
      `<code>class Designer {
  constructor(info) {
    this.name = info.name;
    this.tools = info.tools;
    this.birthday = info.birthday;
    this.age = 2019 - info.birthday;
    this.rate = info.tools.length;
  }
  portfolio() {
    console.log(\`
      Name: \${this.name} (designer)
      Age: \${this.age}
      Rate: \${this.rate}
    \`);
  }
}</code>`,
      `<p>Разработчик</p>`,
      `<code>class Developer {
  constructor(info) {
    this.name = info.name;
    this.birthday = info.birthday;
    this.languages = info.languages;
    this.skills = info.skills;
    this.age = 2019 - info.birthday;
    this.rate = info.skills.length;
  }
  portfolio() {
    console.log(\`
      Name: \${this.name} (developer)
      Age: \${this.age}
      Rate: \${this.rate}
    \`);
  }
}</code>`,
      `<p>Именно для их создания создается фабрика, код которой был представлен выше</p>`,
      `<p>Разработчику всего лишь нужно создать экземпляр фабрики и вызвать метод create, который и создает объекты.</p>`,
      `<code>const workerFactory = new WorkerFactory();

const manager = workerFactory.create('manager', {
  name: 'John',
  birthday: 1980
});
manager.portfolio();

const designer = workerFactory.create('designer', {
  name: 'Mary',
  birthday: 2000,
  tools: ['photoshop', 'paint']
});
designer.portfolio();

const developer = workerFactory.create('developer', {
  name: 'Steve',
  birthday: 1994,
  skills: ['javascript', 'typescript', 'php']
});
developer.portfolio();</code>`,
      `<p>Однако остается неочевидным, в каком формате нужно вводить информацию о работнике, так как она может отличаться по содержанию. Для этого удобно использовать typescript, так как он поддерживает типы и позволяет указать какие именно поля должны быть во вводимых данных.</p>`,
      `<p>Интерфейс информации о разработчике IDeveloperInfo четко дает понять, какие данные нужно вводить, чтобы создать объект разработчика:</p>`,
      `<code>export interface IDeveloperInfo {
  name: string;
  birthday: number;
  languages: string[];
}</code>`,
      `<p>При этом код создания обекта developer будет сдедующим:</p>`,
      `<code>const workerFactory = new WorkerFactory();
      
const developerInfo: IDeveloperInfo = {
  name: 'Steve',
  birthday: 1994,
  languages: ['javascript', 'typescript', 'php']
};
const developer = workerFactory.create('developer', developerInfo);
developer.portfolio();</code>`,
      `<p>В этом случае (с использованием typescript) классы создания объектов можно вынести в отдельные файлы и указать их интерфейсы.</p>`,
      `<p>Класс менеджера - manager.ts</p>`,
      `<code>export interface IManagerInfo {
  name: string;
  birthday: number;
}

export interface IManager extends IManagerInfo {
  age: number;
  portfolio(): void;
}

export default class Manager implements IManager {
  name: string;
  birthday: number;
  age: number;

  constructor(info: IManagerInfo) {
    this.age = 2019 - info.birthday;
    this.name = info.name;
    this.birthday = info.birthday;
  }
  portfolio(): void {
    console.log(\`
      Name: \${this.name} (manager)
      Age: \${this.age}
    \`);
  }
}</code>`,
      `<p>Если появится какой-то новый работник, то для него будет создан отдельный файл со своим классом и вся логика будет разделена не только логически, но и физически, что очень удобно.</p>`,
    ]
  };
  