import { isPrimitive } from "util";


function createElement(
    context,
    tag,
    data,//可传可不传
    children
) {
    if (Array.isArray(data) || isPrimitive(data)) {
        children = data;
        data = undefined;
    }
}