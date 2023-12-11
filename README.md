# VMware_Snapshot_Timestamp_Converter ![Deploy VMware Snapshot Timestamp Converter to Pages Status](https://github.com/hydrotho/VMware_Snapshot_Timestamp_Converter/actions/workflows/deploy.yml/badge.svg)

VMware Snapshot Timestamp Converter is a tool that converts VMware snapshot timestamp into a human-readable format and vice versa.

## Motivation

The VMware Snapshot Timestamp Converter is designed to solve a specific problem in VMware virtual machine snapshot management: converting non-standard snapshot timestamps into a readable format. Often, these timestamps are in a format not easily understood or modified, leading to challenges in tracking and troubleshooting. This tool simplifies the process, enabling users to quickly convert and correct timestamps, thereby improving the efficiency and accuracy of virtual machine snapshot management.

## Quick Start

If you encounter problems with the timestamp of your VMware virtual machine snapshot, you can use VMware Snapshot Timestamp Converter to help you fixing problems.

![image](https://user-images.githubusercontent.com/42911474/211141357-fdf5a9d9-ebb0-4c64-b40d-ab95e9c3364b.png)

The timestamp of `2000/01/01 0:00:00` in the above picture is clearly a wrong timestamp due to a system time error.

Simply select the time you actually want and the converter will automatically display the `createTimeHigh` and `createTimeLow` values.

![image](https://github.com/hydrotho/VMware_Snapshot_Timestamp_Converter/assets/42911474/78f58385-a465-4f1b-aab1-36410921a0ba)

To fix the timestamp, open the `.vmsd` file in the virtual machine directory and change the `snapshot*.createTimeHigh` and `snapshot*.createTimeLow` values to the ones calculated by VMware Snapshot Timestamp Converter.

![image](https://github.com/hydrotho/VMware_Snapshot_Timestamp_Converter/assets/42911474/1137fd93-c22b-4fae-b052-ccf8a8ddf3e3)

Save the file and reopen VMware Workstation to see that the timestamp has been successfully modified.

![image](https://user-images.githubusercontent.com/42911474/211142524-244a5bd3-357d-4c28-8578-a7974922ad42.png)

## Credits

[VMware Snapshot Forensics](https://stuffphilwrites.com/2013/03/vmware-snapshot-forensics)

## License

This project is licensed under the MIT License, see the [LICENSE](LICENSE) file for details.
