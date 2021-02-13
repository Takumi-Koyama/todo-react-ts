//やりたいファイル名+test+拡張子
import { sum } from '../src/lib/sample';

//大項目(テストスウィート) なくても動く
//testのパターン名(なんでも良い)、実際のテストを行いたいテスト関数を記載
describe('sample test', () => {
  //小項目
  test('sum test ok', () => {
    //実際に呼び出す.期待値
    expect(sum(1, 3)).toBe(4);
    expect(sum(3, 8)).toBe(11);
  });
  //異常系テスト
  test('sum test ng', () => {
    //.notをつけると!のような意味合いになる
    expect(sum(1, 3)).not.toBe(5);
    expect(sum(3, 8)).not.toBe(10);
  });
});

//テストの実行→npx jest
