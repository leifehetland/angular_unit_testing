import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodoComponent(service);
  });

  it('should set todos property with the items returned from the server', () => {
    let todos = [
      { id: 1, title: 'a' },
      { id: 2, title: 'b' },
      { id: 3, title: 'c' }
    ];

    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([ todos ]);
    });

    component.ngOnInit();

    expect(component.todos.length).toBeGreaterThan(0);
    expect(component.todos.length).toBe(3);
    expect(component.todos).toBe(todos);
  });
});
