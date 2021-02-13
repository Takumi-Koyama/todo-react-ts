import { TodoItem } from '../src/components/TodoItem';
import { Todo } from '../src/model/Todo';
//testingライブラリを直接読み込む
import '@testing-library/jest-dom';
//実際に呼び出すことはなくてもReactを読み込む
import React from 'react';
//render,screenをtestinglibraryからとってくる
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

//テストが終わった時に絶対実行される
afterEach(() => {
  //自分でレンダーしたものを綺麗にしてくれる
  return cleanup();
});

describe('TodoItem components', () => {
  it('matches snapshot', () => {
    //テスト用のtodoを用意する
    const todo: Todo = { title: 'test title', description: 'test description' };
    render(<TodoItem todo={todo} />);
    //スナップショットを取ることで見た目が変わっていなことを確認
    const { asFragment } = render(<TodoItem todo={todo} />, {});
    expect(asFragment()).toMatchSnapshot();
    //デバックでhtml形式で確認する console.logと同じ感じ テストを作る用のconsole.log
    // screen.debug();
  });
  //自分が入れた値が正しく表示されるか
  it('render todo', () => {
    const todo: Todo = {
      title: 'test title',
      description: 'test description',
    };
    render(<TodoItem todo={todo} />);
    //testtitleと記載されているテキストが自分のドキュメントに存在するか
    expect(screen.getByText('test title')).toBeInTheDocument();
    expect(screen.getByText('test description')).toBeInTheDocument();
  });
  //clickは親に依存している テスト用のファンクションの作り方
  it('click todo', () => {
    const mockFunction = jest.fn();
    const todo: Todo = {
      title: 'test title',
      description: 'test description',
    };
    render(<TodoItem todo={todo} onClick={mockFunction} />);
    //対象のドキュメントを特定する方法 idがない場合 取得できるドムの親要素という指定
    const todoItem = screen.getByText('test title')
      .parentElement as HTMLElement;
    //クリックしたいHTMLを引数に渡す
    userEvent.click(todoItem);
    //一回だけ呼ばれているか確認
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
