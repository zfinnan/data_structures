def reverse_list(head):
    cur_node = head
    prev_node = None
    next_node = None
    while cur_node:
        next_node = cur_node.next
        cur_node.next = prev_node
        prev_node = cur_node
        cur_node = next_node
    return prev_node