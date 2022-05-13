# FrontEnd Tutorial

## Challenge

### Lesson2： package.jsonとpackage-lock.jsonの役割の違い
package.jsonは最小限のnpmモジュールのバージョンが記載されているのに対して、package-lock.jsonはpackage.jsonでバージョン指定したモジュールの孫依存モジュールに関して記録することができる。


- package.json
  - このドキュメントは、package.jsonファイルに必要なものについて知っておく必要があるすべてです。JavaScriptオブジェクトリテラルではなく、実際のJSONである必要があります。
  - このドキュメントで説明されている動作の多くは、で説明されている構成設定の影響を受けますconfig。(npmドキュメントの原文訳)

- package-lock.json
  - package-lock.json node_modules npmがツリーまたはのいずれかを変更するすべての操作に対して自動的に生成されますpackage.json。中間の依存関係の更新に関係なく、後続のインストールで同一のツリーを生成できるように、生成された正確なツリーを記述します。(npmドキュメントの原文訳)


参照元
- 一次資料
- https://docs.npmjs.com/cli/v7/configuring-npm/package-json
- https://docs.npmjs.com/cli/v6/configuring-npm/package-lock-json
- 二次資料
- https://note.com/shohey_tech/n/n103120f6295e


### Lesson4： Keyboard Eventsの追加

以下のように、MUIのInputコンポーネント内のタグ内にonKeyDownのイベントを追加する。
```
<Input value={props.value} onChange={props.onChange} onKeyDown={props.onSubmit} />
```

他にもKeyboard EventsとしてonKeyPressとonKeyUpがあるがそれらの違いはのちに調べる。

参照元
- 一次資料
- https://reactjs.org/docs/events.html#keyboard-events
- 二次資料
- https://qiita.com/sin9270/items/ebf5afcd2629529fbc42

### Lesson5： 
