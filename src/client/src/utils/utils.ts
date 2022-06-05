type Options<D> = { parent: keyof D; child: keyof D };
export type TreeItem<D> = D & { descendants: Array<TreeItem<D>> };

export function toTree<D>(data: Array<D>, options: Options<D>) {
  const transformedData: TreeItem<D>[] = data.map((item) => ({
    ...item,
    descendants: [],
  }));
  const tree: TreeItem<D>[] = [];

  function getParent(i: TreeItem<D>) {
    return transformedData.find(
      (item) => item[options.parent] === i[options.child],
    );
  }

  function setConnection(item: TreeItem<D>): TreeItem<D> {
    const index = transformedData.findIndex((i) => i === item);
    const [i] = transformedData.splice(index, 1);
    if (i[options.child] !== null) {
      const parent = getParent(i);
      if (parent) {
        parent.descendants.push(i);
        return setConnection(parent);
      }
    }
    return i;
  }

  while (transformedData.length) {
    const [item] = transformedData;
    const grandParent = setConnection(item);
    tree.push(grandParent);
  }

  return tree;
}
