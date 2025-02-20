```mermaid
graph TD;
    A[User] -->|Navigates to| B[Single-Page App];
    B -->|Loads| C[Notes App Interface];
    C -->|Displays| D[User's Notes];
    C -->|Allows| E[Add New Note];
    C -->|Allows| F[Edit Note];
    C -->|Allows| G[Delete Note];
    E -->|Saves| D;
    F -->|Updates| D;
    G -->|Removes| D;
```
