# VMware_Snapshot_Timestamp_Converter

> VMware Snapshot Timestamp Converter 是一个用于将 VMware 快照时间戳和人类可读格式相互转换的工具。

## Introduction

Welcome to VMware Snapshot Timestamp Converter!

Sometimes, we may encounter problems that cause the timestamp of the created VMware virtual machine snapshot to be incorrect. However, the timestamps on VMware virtual machine snapshots are not in the standard Unix format, making them difficult to directly modify. That's where VMware Snapshot Timestamp Converter comes in!

This tool allows you to easily convert the timestamps on VMware virtual machine snapshots between a human-readable format and the actual timestamp used by VMware. Simply input the timestamp you wish to convert and the tool will handle the rest.

So if you're tired of dealing with problematic snapshot timestamps, give VMware Snapshot Timestamp Converter a try. It's the perfect solution for anyone looking to easily manage and modify their VMware snapshot timestamps.

## Quick Start

If you encounter problems with the timestamp of your VMware virtual machine snapshot, you can use VMware Snapshot Timestamp Converter to help you fixing problems.

![image](https://user-images.githubusercontent.com/42911474/211141357-fdf5a9d9-ebb0-4c64-b40d-ab95e9c3364b.png)

The timestamp of `2000/01/01 0:00:00` in the above picture is clearly a wrong timestamp due to a system time error.

Simply select the time you actually want and the converter will automatically display the `createTimeHigh` and `createTimeLow` values.

![image](https://user-images.githubusercontent.com/42911474/211142422-b834c3d6-e88b-4469-b38e-b0e6b6f9edc6.png)

To fix the timestamp, open the `.vmsd` file in the virtual machine directory and change the `snapshot*.createTimeHigh` and `snapshot*.createTimeLow` values to the ones calculated by VMware Snapshot Timestamp Converter.

![image](https://user-images.githubusercontent.com/42911474/211142477-e7acd9d5-cfbc-474f-8db1-12353925a6be.png)

Save the file and reopen VMware Workstation to see that the timestamp has been successfully modified.

![image](https://user-images.githubusercontent.com/42911474/211142524-244a5bd3-357d-4c28-8578-a7974922ad42.png)

## Credits

[VMware Snapshot Forensics](https://stuffphilwrites.com/2013/03/vmware-snapshot-forensics)

## License

[GNU GPLv3](https://github.com/hydrotho/VMware_Snapshot_Timestamp_Converter/blob/master/LICENSE)
