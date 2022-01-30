function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(",");
    let idx = cache.findIndex((item) => item.hash === hash);
    console.log(idx);
    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    } else {
      let result = func(...args);
      cache.push({ hash: hash, value: result });
      if (cache.length > 5) {
        cache.shift(0);
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }
  return wrapper;
}

function debounceDecoratorNew(func, ms) {
  let flag = false;
  //let count = 0;
  let timeout;
  return function (...args) {
    //count++;
    if (flag) {
      //console.log("Вызов номер " + count + " проигнорирован");
      clearTimeout(timeout);
      timeout = setTimeout(() => (flag = false), ms);
      return;
    } else {
      func.apply(this, args);
      flag = true;
      //console.log("Вызван на попытке номер " + count);
      clearTimeout(timeout);
      timeout = setTimeout(() => (flag = false), ms);
    }
  };
}

function debounceDecorator2(func) {
  let flag = false;
  let count = 0;
  let timeout;
  return function (...args) {
    count++;
    console.log("Вызов номер - " + count);
    if (flag) {
      clearTimeout(timeout);
      timeout = setTimeout(() => (flag = false), ms);
      return;
    } else {
      func.apply(this, args);
      flag = true;
      clearTimeout(timeout);
      timeout = setTimeout(() => (flag = false), ms);
    }
  };
}
