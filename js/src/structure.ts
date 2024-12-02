// Structures

// select-view
const init_select_view = (): void => {
    const _select_views: Element[] = Array.from(document.getElementsByClassName("select-view"));

    Array.from(_select_views).forEach((item) => {
        // 类型断言为具体的 HTML 元素类型
        const _select_view_select = item.querySelector<HTMLSelectElement>(":scope > .select-view-select");
        const _select_view_views = item.querySelectorAll<HTMLElement>(":scope > .select-view-view");

        if (!_select_view_select || !_select_view_views) {
            console.warn("Missing select or views in select-view element:", item);
            return;
        }

        const updateView = (): void => {
            const selectedValue = _select_view_select.value;
            const _select_view_views_selected = item.querySelectorAll<HTMLElement>(`:scope > .select-view-view.option-${selectedValue}`);

            // 隐藏所有视图
            Array.from(_select_view_views).forEach((_item) => {
                _item.style.display = "none";
            });

            // 显示已选中的视图
            Array.from(_select_view_views_selected).forEach((_item) => {
                _item.style.display = "block";
            });
        };

        // 初始化视图显示
        updateView();

        // 监听选择变化
        _select_view_select.onchange = updateView;
    });
};

init_select_view();
