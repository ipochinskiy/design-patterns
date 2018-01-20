class MyNode {
    children: MyNode[] = [];

    constructor(
        public name: string,
    ) {
    }

    add(child: MyNode) {
        this.children.push(child);
    }
 
    remove(child: MyNode) {
        const index = this.children.indexOf(child);
        if (index === -1) {
            return;
        }

        this.children.splice(index, 1);
    }
 
    getChild(i: number) {
        return this.children[i];
    }
 
    hasChildren() {
        return this.children.length > 0;
    }
}
 
// recursively traverse a (sub)tree
 
function traverse(indent: number, node: MyNode) {
    const nextIndent = indent + 1;
    console.log(Array(nextIndent).fill('--') + node.name);

    node.children.forEach(child => {
        if (child.hasChildren) {
            return;
        }
        traverse(nextIndent, child);
    });
}
 
function run() {
    const tree = new MyNode('root');
    const left = new MyNode('left')
    const right = new MyNode('right');
    const leftleft = new MyNode('leftleft');
    const leftright = new MyNode('leftright');
    const rightleft = new MyNode('rightleft');
    const rightright = new MyNode('rightright');
 
    tree.add(left);
    tree.add(right);
    tree.remove(right);
    tree.add(right);
 
    left.add(leftleft);
    left.add(leftright);
 
    right.add(rightleft);
    right.add(rightright);
 
    traverse(1, tree);
}
