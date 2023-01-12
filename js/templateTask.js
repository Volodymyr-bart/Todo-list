export default function createElementTask(item, i) {
  console.log(item);
  console.log(i);
  return `
    <li>
        <input type='checkbox' id='item_${i}' ${item.checked ? "checked" : ""}>
        <label for='item_${i}'>${item.todo}</label>
    </li>
    `;
}
