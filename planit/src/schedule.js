export default function schedule(arr1, arr2, bound1, bound2, time) {

    function convertToMinutes(time) {
        const arr = time.split(":")
        const hrs = parseInt(arr[0])
        const minutes = parseInt(arr[1])

        return minutes + (hrs * 60)
    }

    function convertToTime(num) {
        const mins = num % 60;
        const hrs = parseInt(num / 60);

        return `${hrs}:${mins.toString().padStart(2, '0')}`;
    }

    function convertArrayToTime(arr) {
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
            const innerArr = [];
            for (let j = 0; j < arr[i].length; j++) {
                innerArr.push(convertToTime(arr[i][j]));
            }
            newArr.push(innerArr);
        }
        return newArr;
    }

    function convertArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                arr[i][j] = convertToMinutes(arr[i][j])
            }
        }

        return arr
    }

    function convertBounds(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = convertToMinutes(arr[i])
        }

        return arr
    }

    function getFreeSlots(arr, bounds) {
        const min = bounds[0]
        const max = bounds[1]
        let result = []

        for (let i = 0; i < arr.length; i++) {
            const curr = arr[i]
            const currMin = curr[0]
            const currMax = curr[1]

            if (i === 0) {
                if (min < currMin) {
                    result.push([min, currMin])
                    continue
                } else continue
            }

            if (currMin > arr[i - 1][1]) {
                result.push([arr[i - 1][1], currMin])
            }

            if (i === arr.length - 1) {
                if (max > currMax) {
                    result.push([currMax, max])
                    break
                }
            }
        }

        return result
    }

    function removeSlotsUnderTime(arr) {
        for (let i = 0; i < arr.length; i++) {
          const curr = arr[i];
          const min = curr[0];
          const max = curr[1];
      
          if (max - min < time) {
            arr.splice(i, 1); // Use 1 instead of i + 1
            i--; // Decrement i to adjust for the removed element
          }
        }
      
        return arr;
      }

    function compare(arr1, arr2) {
        let result = []
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                let start = Math.max(arr1[i][0], arr2[j][0])
                let end = Math.min(arr1[i][1], arr2[j][1])

                if (end - start >= time) {
                    result.push([start, end])
                }
            }
        }

        return result
    }

    let mins1 = convertArray(arr1)
    let mins2 = convertArray(arr2)
    let minBound1 = convertBounds(bound1)
    let minBound2 = convertBounds(bound2)

    let freeSlots1 = getFreeSlots(mins1, minBound1)
    let freeSlots2 = getFreeSlots(mins2, minBound2)

    let validSlots1 = removeSlotsUnderTime(freeSlots1)
    let validSlots2 = removeSlotsUnderTime(freeSlots2)

    let ans = compare(validSlots1, validSlots2)
    let ansToTime = convertArrayToTime(ans)

    return ansToTime
}

// console.log (schedule([["9:00", "11:00"], ["12:00", "13:00"], ["14:30", "15:00"]], [["8:00", "10:30"], ["12:00", "13:30"]], ["9:00", "18:00"], ["8:00", "17:00"], 60)) // Output: [ [ '11:00', '12:00' ], [ '13:30', '17:00' ] ]