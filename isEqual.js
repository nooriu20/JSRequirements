function isEqual(first, second) {
  let result = true;

  if (typeof first != typeof second) {
      return false;
  }
  else if (first === second) {
      return true;
  }
  else if (Array.isArray(first)) {
      if (first.length != second.length) {
          return false;
      }
      else {
          let allItemsIsEqual = true;
          first.forEach(item => {
              let found = false;
              second.forEach(secArrItem => {
                  if (found == false) {
                      if (isEqual(item, secArrItem)) {
                          found = true;
                          let index = second.indexOf(secArrItem);
                          let temp = [];
                          for (let i = 0; i < second.length; i++) {
                              if (i != index) {
                                  temp.push(second[i]);
                              }
                          }
                          second = temp;
                      }
                  }
              });

              if (found == false) {
                  allItemsIsEqual = false;
                  result = false;
              }
          });
      }
  }
  else if (typeof first == "object") {
      let firstKeys = (first ? Object.keys(first) : []);
      let secondKeys = (second ? Object.keys(second) : []);

      if (!isEqual(firstKeys, secondKeys)) {
          return false;
      }
      else {
          let found = true;
          for (let c = 0; c < firstKeys.length; c++) {
              let key = firstKeys[c];
              if (found == true) {
                  if (typeof first[key] != typeof second[key]) {
                      found = false;
                      result = false;
                      return false;
                  }
                  else {
                      if (!isEqual(first[key], second[key])) {
                          found = false;
                          result = false;
                          return false;
                      }
                  }
              }
          }
      }
  }
  else {
      result = false;
  }

  return result;
};
