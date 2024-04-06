# Group module concepts
When the group module is enabled in a chain (say the Cosmos Hub), users can create groups and submit group proposals. This means that any number of users can be part of a group and vote on the group's proposals.  

---

Before starting, review some terminology:  

[Group Admin](https://docs.cosmos.network/v0.46/modules/group/01_concepts.html#group): the account that creates the group is the group administrator. The group administrator is the account that can add, remove, or change the group members, but does not need to be a member of the group itself. Choose it wisely.  

[Group policy](https://docs.cosmos.network/v0.46/modules/group/01_concepts.html#group-policy): a group policy is an account associated with a group and a decision policy. In order to perform actions on this account, a proposal must be approved by a majority of the group members or as defined in the decision policy. For the avoidance of doubt, note that a group can have multiple group policies.  

[Decision policy](https://docs.cosmos.network/v0.46/modules/group/01_concepts.html#decision-policy): a policy that defines how the group members can vote on a proposal and how the vote outcome is calculated. A decision policy is associated with a group policy. This means that a group can have different decision policies for each of its different group policies.  

[Proposal](https://docs.cosmos.network/v0.46/modules/group/01_concepts.html#group-policy): a group proposal works the same way as a governance proposal. Group members can submit proposals to the group and vote on proposals with a Yes, No, No with Veto, and Abstain.  

[Voting](https://docs.cosmos.network/v0.46/modules/group/01_concepts.html#voting): 
There are four choices to choose while voting - yes, no, abstain and veto. Not all decision policies will take the four choices into account. Votes can contain some optional metadata. In the current implementation, the voting window begins as soon as a proposal is submitted, and the end is defined by the group policy's decision policy.

## More

Check out the documentation for the [group module](https://docs.cosmos.network/v0.46/modules/group/01_concepts.html).
