package wallsandgates

import "testing"

var testCases = []struct {
	s           string
	want        string
	expectError bool
}{
	{ // base case
		"",
		"",
		false,
	},
}

// TestwallsAndGates tests the wallsAndGates function against the above test cases
func TestwallsAndGates(t *testing.T) {
	for _, tc := range testCases {
		got, err := wallsAndGates(tc.s)
		if tc.expectError {
			var _ error = err
			if err == nil {
				t.Fatalf("wallsAndGates(%v); expected error, got nil.",
					tc.s)
			}
		} else {
			if err != nil {
				t.Fatalf("wallsAndGates(%v) returned unexpected error: %v",
					tc.s, err)
			}
			if got != tc.want {
				t.Fatalf("wallsAndGates(%v) = %v, want %v.",
					tc.s, got, tc.want)
			}
		}
	}
}
